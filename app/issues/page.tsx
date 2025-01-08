import { Button, Link } from "@radix-ui/themes"


const Issuespage = () => {
  return (
    <>
    <div>
        <Button><Link href={"/issues/new"}>New Issue</Link></Button>
    </div>
    </>
  )
}

export default Issuespage