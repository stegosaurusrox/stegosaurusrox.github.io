import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Research from "@/pages/Research";
import Team from "@/pages/Team";
import Publications from "@/pages/Publications";
import Collaborators from "@/pages/Collaborators";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/research" component={Research} />
      <Route path="/team" component={Team} />
      <Route path="/publications" component={Publications} />
      <Route path="/collaborators" component={Collaborators} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
