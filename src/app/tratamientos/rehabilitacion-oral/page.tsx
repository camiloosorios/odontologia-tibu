import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const RehabilitacionOralDynamic = dynamic(() => import('@/components/RehabilitacionOral'), {
  ssr: true,
});

export default function RehabilitacionOralPage() {
    return (
        <>
            <Header>
                <h1 className="text-4xl lg:text-6xl text-center font-monserrat mt-60 text-white">Tratamientos</h1>
            </Header>
            <RehabilitacionOralDynamic/>
            <Footer/>
        </>
    )
}
