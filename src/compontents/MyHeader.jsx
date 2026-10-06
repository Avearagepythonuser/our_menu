import { useState } from "react"
import { getAllCategories } from "../utils"
import { ButtonGroup } from "@heroui/react"
import { Button } from "@heroui/react"
import { motion, spring } from "motion/react"
import { TimeSpent } from "./TimeSpent"

export function MyHeader({selectedCateg, setSelectedCateg}) {
    const [categories, setCategories] = useState(getAllCategories)

    return (
        <header className="flex flex-col items-center gap-4 relative">
                <motion.h1 className='text-center text-3xl font-bold text-amber-400' initial={{x:"100vw"}} animate={{x:0, transition: {duration:1, type: spring, stiffness:20}}}>Our Menu</motion.h1>
                <TimeSpent/>
            <ButtonGroup variant="secondary" className="bg-amber-400 text-gray-900 rounded-3xl">
                {categories.map((item, index) => 
                    <Button key={index} className={selectedCateg == item ? "bg-gray-900 text-amber-400" : "bg-amber-400 text-gray-900"} onClick={()=> setSelectedCateg(item)}>
                        <ButtonGroup.Separator />
                        <motion.span whileHover={{scale: 1.1}}>{item}</motion.span>
                    </Button>
                )}
                
            </ButtonGroup>
        </header>
    )
}