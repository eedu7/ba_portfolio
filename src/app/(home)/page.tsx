import Header from "@/components/Header";
import Introduction from "@/app/(home)/components/Introduction";
import Bio from "@/app/(home)/components/Bio";
import Contact from "@/app/(home)/components/Contact";
import Copyrights from "@/components/Copyrights";

export default function Home() {
    return (<>
        <Header/>
        <main>
            <Introduction/>
            <Bio/>
            <Contact/>
        </main>
        <footer>
            <Copyrights/>
        </footer>

    </>);
}

