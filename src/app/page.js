"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
        {/* <div className="bg-gray-50 min-h-screen">
          <Form/>
        </div> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
