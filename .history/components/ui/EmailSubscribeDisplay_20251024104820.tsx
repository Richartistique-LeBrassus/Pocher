export const EmailSubscribeDisplay = () => {
  return (
    <div className="w-full max-w-xs mx-auto mb-4">
      <div className="inline-flex items-center gap-2 text-xs lg:text-sm w-full
      lg:flex lg:flex-col lg:items-start">
        <input
          type="text"
          placeholder="Enter Email Address"
          className="flex-1 pr-5 py-[10px] lg:py-2 border-b border-neutral-200
          focus:outline-none uppercase placeholder:text-neutral-200
          focus:ring-2 focus:ring-neutral-200 dark:border-neutral-200
          dark:bg-stone-900 dark:text-white dark:placeholder-stone-400
          sm:pr-7 sm:py-3"
          disabled
        />
        <button
          type="button"
          className="px-5 py-[10px] lg:py-2 border border-neutral-200 
          text-neutral-200 uppercase font-semibold cursor-pointer
          rounded-xs hover:bg-neutral-200 hover:text-black 
          transition-colors dark:border-stone-300 duration-500
          dark:text-stone-300 dark:hover:bg-stone-300 
          dark:hover:text-stone-900
          sm:px-7 sm:py-3"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};