export function usePagination(elements = [], page = 1, perPage = 10) {

    const res = elements.slice((page - 1) * perPage, perPage * page)
    return [res, Math.ceil(elements.length / perPage) || 1]
}