import Header from "@/components/landing/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-container py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">
            Welcome
          </h1>
          <p className="mt-4 text-muted-foreground">
            Ready for your new project. What would you like to build?
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
