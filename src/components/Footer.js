export const Footer = () => {
    const date = new Date();
    return (
    <div className="footer shadow">
    <div className="text-center">Coded with ❤️ by:
        <div><b>Riccardo Limiti</b></div>
        <div>&copy;{date.getFullYear()}</div>
    </div>
    </div>
    );
};
