import useColorMode from "@/app/components/useColorMode";
import { Moon, Sun } from "lucide-react";

const Button = () => {
  const [colorMode, setColorMode] = useColorMode();
 
  return (
    <button onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}>
        {colorMode === "light" ? 
        <Sun className="hover:text-rose-600 hover:scale-110"/> 
        : <Moon className="hover:text-rose-600 hover:scale-110"/>}
    </button>
  )

}
export default Button;