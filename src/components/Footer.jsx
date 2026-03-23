import { personal } from '../data/about'

export default function Footer() {
  return (
    <footer className="border-t border-lavender/20 py-8 px-6 text-center">
      <p className="text-xs text-navy/30">
        {personal.name} · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
