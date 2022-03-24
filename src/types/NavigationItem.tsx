import Link from "next/link"
export default interface NavigationItem {
    id: string,
    children: {
        id: string,
        icon?: any,
        link?: typeof Link,
        active?: boolean
    }[]
}