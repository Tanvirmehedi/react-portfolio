export const ShareHeader =({pageTitle})=>{
    return(
        <h1 className="text-start text-2xl font-semibold before:inline-block before:end-10 before:top-3.5 before:absolute before:w-1/3 before:h-0.5 before:bg-gradient-to-r from-[#FFCE42] to-[#1BBAD6] relative">
        {pageTitle}
      </h1>
    )
}