import { Article } from "@components/Article";
import { useRouter } from "next/router"

export default function Post() {
    const router = useRouter();
    const { title } = router.query;
    return (
        <>
            <Article />
            <h1>Post title: {title}</h1>
            <p>Lorem ipsum</p>
        </>
    )
}