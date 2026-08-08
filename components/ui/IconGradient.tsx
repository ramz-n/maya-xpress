const IconGradient = () => {
    return (
        <svg className="absolute h-0 w-0 pointer-events-none" aria-hidden="true" focusable="false">
            <defs>
                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-amber)" />
                    <stop offset="30%" stopColor="var(--color-magenta)" />
                    <stop offset="60%" stopColor="var(--color-violet)" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default IconGradient