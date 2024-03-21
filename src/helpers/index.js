export function getThumbnail(content = '') {
    const match = content.match(/<img[^>]+src="([^">]+)"/)
    return match ? match[1] : ''
}