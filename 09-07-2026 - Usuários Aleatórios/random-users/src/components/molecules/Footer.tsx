import "@/app/globals.css"

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                <p>UserList. Projeto base para prática com Next.js.</p>
                <p>React</p>
            </div>
        </footer>
    );
}