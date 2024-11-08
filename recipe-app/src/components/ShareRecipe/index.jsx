import React, { useState } from 'react';

const ShareRecipe = ({ recipeId }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${window.location.origin}/recipe/${recipeId}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="share-recipe">
      <input type="text" value={shareUrl} readOnly />
      <button onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
};

export default ShareRecipe;
