import CirugiaOral from "@/components/CirugiaOral";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function CirugiaOralPage() {
    return (
        <>
            <Header>
                <h1 className="text-4xl lg:text-6xl text-center font-monserrat mt-60 text-white">Tratamientos</h1>
            </Header>
            <CirugiaOral/>
            <Footer/>
        </>
    )
}
