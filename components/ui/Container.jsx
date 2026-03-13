export default function Container({ children }) {
    return (
        <div className=" max-w-7xl mx-auto px-6 border-4 border-red-500 bg-yellow-100">
            {children}
        </div>
    )
}