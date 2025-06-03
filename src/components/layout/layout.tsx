import { Sidebar } from '../sidebar/sidebar'

export function Layout() {
    return (
        <div className="">
            <Sidebar />
            <div className="">
                {/* ... dynamic pages */}
            </div>
        </div>
    )
}
