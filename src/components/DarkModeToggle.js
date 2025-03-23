function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);


    {/* Dark Mode and Light MOde*/}  


    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    }, [darkMode]);

    return (
        <button className="btn btn-dark" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />} Toggle Theme
        </button>
    );
}

export default DarkModeToggle;