import morphdom from 'morphdom';

export default function setHtmlContent(el, content, opts) {
	if (typeof content === 'string' || content instanceof String) {
		const nodeName = el.nodeName.toLowerCase();
		return morphdom(el, `<${nodeName}>${content}</$nodeName}`, opts);
	} else {
		const clone = el.cloneNode(false);
		if (Array.isArray(content)) {
			content.forEach(item => clone.appendChild(item));
		} else {
			clone.appendChild(content);
		}
		return morphdom(el, content, opts);
	}
}
