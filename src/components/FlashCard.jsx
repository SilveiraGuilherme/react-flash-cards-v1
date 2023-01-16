import { useState } from 'react';

export default function FlashCard({
  title = 'Title',
  description = 'Description of the card, which may have a greater number of words describing its content.',
}) {
  const [showTitle, setShowContent] = useState(true);
  function handleShowContent() {
    // setShowContent(!showTitle);
    setShowContent(() => !showTitle);
  }
  const fontSizeClassName = showTitle ? 'text-xl' : 'text-sm';
  return (
    <div
      className={`shadow-xl border rounded-md p-4 m-2 w-80 h-48 cursor-pointer font-semibold flex items-center justify-center text-center ${fontSizeClassName}`}
      style={{ fontfamily: "'JetBrains Mono', monospace" }}
      onClick={handleShowContent}
    >
      {showTitle ? title : description}
    </div>
  );
}
