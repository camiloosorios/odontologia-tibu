import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Periodoncia from "@/components/Periodoncia";

export default function PeriodonciaPage() {
    return (
        <>
            <Header>
                <h1 className="text-4xl lg:text-6xl text-center font-monserrat mt-60 text-white">Tratamientos</h1>
            </Header>
            <Periodoncia />
            <Footer />
        </>
    )
}
