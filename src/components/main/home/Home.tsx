import LoginForm from "@/components/login/LoginForm";
// import Services from "./Services";

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply blur-3xl animate-float" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply blur-3xl animate-float-delayed" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-100/20 rounded-full mix-blend-multiply blur-3xl animate-float" />
        </div>

        <main className="relative">
          <div className="container mx-auto max-w-7xl">
            <div className="pt-44 pb-20 w-full">
              <div className="flex justify-between items-center">
                <div className="mb-8 w-[60%] mt-10">
                  <h1 className="text-6xl font-bold text-blue-900 mb-4 animate-pulse-slow">
                    Complete Business <br /> Management Solution
                  </h1>
                  <p className="text-lg text-neutral-600">
                    Streamline your operations with our comprehensive POS and{" "}
                    <br /> business management system
                  </p>
                </div>
                <LoginForm />
              </div>
            </div>
            {/* <Services /> */}
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
