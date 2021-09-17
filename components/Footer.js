import Link from 'next/link'
const Footer = () => {
    return (
        <div className="mx-auto fixed bottom-0 w-full bg-gray-700 ">
            <p className="text-center text-md text-gray-400 ">Created By:<Link href="https://github.com/kalanaveen">
          <a className="mx-2 text-gray-50 hover:opacity-70 text-sm">@naveenkala</a>
        </Link></p>
        </div>
    )
}

export default Footer
