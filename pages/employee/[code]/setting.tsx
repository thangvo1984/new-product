import { useRouter } from "next/router"


const EmployeeCode = (props: any) => {

    const router = useRouter()
    console.log("file: setting.tsx:7 ~ EmployeeCode ~ router:", router)

    const handleClick = () => {
        router.push('/employee')
    }

    return (
        <div>
            <h1>Hello employee code</h1>
            <button onClick={handleClick}>Click Employee</button>
        </div>
    )
}

export default EmployeeCode