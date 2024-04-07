import { ModeToggle } from "@/components/toggle-mode";
import { UserButton } from "@clerk/nextjs"

const Home = () => {
    return (
        <div>
            <UserButton afterSignOutUrl="/" />
            <ModeToggle />

        </div>
    );
}
 
export default Home;