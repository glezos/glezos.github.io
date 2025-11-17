function timeAgoTwoParts(date) {
  const diff = (new Date() - new Date(date)) / 1000; // seconds
  if (diff < 60) return "just now";

  const intervals = [
    { label: 'year',   secs: 31536000 },
    { label: 'month',  secs: 2592000 },
    { label: 'day',    secs: 86400 },
    { label: 'hour',   secs: 3600 },
    { label: 'minute', secs: 60 }
  ];

  let remaining = diff;
  const parts = [];

  for (const i of intervals) {
    const count = Math.floor(remaining / i.secs);
    if (count > 0) {
      parts.push(`${count} ${i.label}${count > 1 ? 's' : ''}`);
      remaining -= count * i.secs;
    }
    if (parts.length === 2) break;
  }

  return parts.join(', ') + " ago";
}

function updateTimeAgoElements() {
  const nodes = document.querySelectorAll('[data-timeago]');
  nodes.forEach((node) => {
    const dateValue = node.getAttribute('data-timeago');
    if (!dateValue) return;

    const label = timeAgoTwoParts(dateValue);
    const target = node.dataset.timeagoTarget;

    if (target === 'text') {
      node.textContent = label;
    } else {
      node.setAttribute('title', label);
      node.setAttribute('aria-label', label);
      const nested = node.querySelector('[data-timeago-text]');
      if (nested) nested.textContent = label;
    }
  });
}

document.addEventListener('DOMContentLoaded', updateTimeAgoElements);
