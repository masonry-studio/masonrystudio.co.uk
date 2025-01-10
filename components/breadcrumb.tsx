"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Breadcrumb() {
    const pathname = usePathname()
    const breadcrumbs = pathname.split('/')
    breadcrumbs.shift()

    return (
        <>
            <ul className="breadcrumbs">
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <h4> {'/'} </h4>
                </li>
                {breadcrumbs.map((item, index) => {
                    const href = '/' +
                        breadcrumbs.slice(0, index + 1).join('/');
                    return (
                        <li key={index}>
                            <Link className="capitalize" href={href}>
                                {item}
                            </Link>
                            {index < breadcrumbs.length - 1 && (
                                <h4 className="pl-2"> {'/'} </h4>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    )

}