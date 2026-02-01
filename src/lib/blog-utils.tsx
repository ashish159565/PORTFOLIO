export function convertMarkdownToHTML(markdown: string): string {
  let html = markdown;

  // Store code blocks to protect them from other regex replacements
  const codeBlocks: string[] = [];
  html = html.replace(/```(.*?)\n([\s\S]*?)```/gm, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  // Images (must come before paragraphs)
  html = html.replace(
    /!\[(.*?)\]\((.*?)\)/g,
    "<img src='$2' alt='$1' class='max-w-md h-auto rounded-lg my-8 shadow-sm border border-border/30 mx-auto block' />"
  );

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Blockquote
  html = html.replace(
    /^> (.*?)$/gm,
    "<blockquote class='border-l-4 border-accent pl-4 italic my-4'>$1</blockquote>"
  );

  // Headers
  html = html.replace(
    /^### (.*?)$/gm,
    "<h3 class='text-xl font-bold mt-6 mb-4'>$1</h3>"
  );
  html = html.replace(
    /^## (.*?)$/gm,
    "<h2 class='text-2xl font-bold mt-8 mb-4'>$1</h2>"
  );
  html = html.replace(
    /^# (.*?)$/gm,
    "<h1 class='text-3xl font-bold mt-8 mb-4'>$1</h1>"
  );

  // Unordered lists
  html = html.replace(/^\* (.*?)$/gm, "<li>$1</li>");
  html = html.replace(
    /(<li>.*?<\/li>)/s,
    "<ul class='list-disc list-inside my-4'>$1</ul>"
  );

  // Paragraphs (after other replacements to avoid double-wrapping)
  const paragraphs = html.split("\n\n").map((para: string) => {
    if (!para.match(/<h[1-6]|<blockquote|<ul|<li|<img|__CODE_BLOCK_|<code/)) {
      return `<p>${para}</p>`;
    }
    return para;
  });
  html = paragraphs.join("\n\n");

  // Restore code blocks
  codeBlocks.forEach((block, index) => {
    const codeContent = block
      .replace(/```.*?\n/, "")
      .replace(/```/, "")
      .trim();
    html = html.replace(
      `__CODE_BLOCK_${index}__`,
      `<pre class='bg-muted p-4 rounded overflow-x-auto my-4'><code>${escapeHtml(
        codeContent
      )}</code></pre>`
    );
  });

  return html;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export function parseLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}
