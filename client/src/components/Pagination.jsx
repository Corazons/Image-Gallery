export default function Pagination({page, lastPage, setPage}) {
    return (
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-3 mt-8">

            <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-default cursor-pointer"
            >
            Prev
            </button>

            <span className="text-gray-700 font-medium">
            Page {page} / {lastPage}
            </span>

            <button
            disabled={page === lastPage}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-default cursor-pointer"
            >
            Next
            </button>

        </div>
    );
}