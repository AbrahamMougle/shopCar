function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-white text-center py-6 mt-12">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base">
          © {currentYear} Tous droits réservés - <span className="text-amber-400">Abraham Mougle</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer