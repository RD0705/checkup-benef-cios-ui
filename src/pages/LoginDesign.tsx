import { Heart, Shield, Users } from "lucide-react";

// Clerk Appearance Theme - Export this to use with ClerkProvider
export const clerkAppearance = {
  layout: {
    socialButtonsPlacement: 'bottom' as const,
    logoPlacement: 'none' as const,
  },
  variables: {
    colorPrimary: '#FF6600', // brand-orange
    colorText: '#003366', // brand-blue
    colorTextSecondary: '#64748b',
    colorBackground: '#ffffff',
    colorInputBackground: '#ffffff',
    colorInputText: '#003366',
    fontFamily: 'Inter, system-ui, sans-serif',
    borderRadius: '0.5rem',
  },
  elements: {
    card: 'shadow-none bg-transparent border-none p-0',
    headerTitle: 'hidden',
    headerSubtitle: 'hidden',
    formButtonPrimary: 'bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-semibold py-3 rounded-lg transition-all',
    formFieldInput: 'border-gray-200 focus:border-[#FF6600] focus:ring-[#FF6600] rounded-lg py-3',
    formFieldLabel: 'text-[#003366] font-medium',
    footerActionLink: 'text-[#003366] hover:text-[#FF6600] hover:underline font-medium',
    socialButtonsBlockButton: 'border-gray-200 hover:bg-gray-50 rounded-lg py-3',
    dividerLine: 'bg-gray-200',
    dividerText: 'text-gray-400',
    identifierPreviewText: 'text-[#003366]',
    formFieldSuccessText: 'text-green-600',
    formFieldErrorText: 'text-red-500',
  }
};

const LoginDesign = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Visual Highlight */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-orange relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20 text-white">
          {/* Icons */}
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          {/* Quote */}
          <blockquote className="space-y-4">
            <p className="text-3xl xl:text-4xl font-light leading-relaxed">
              "Cuidar da sua saúde é o melhor investimento que você pode fazer."
            </p>
            <footer className="text-lg text-white/80">
              — CheckUp Benefícios
            </footer>
          </blockquote>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold">5.000+</p>
              <p className="text-sm text-white/70">Associados ativos</p>
            </div>
            <div>
              <p className="text-3xl font-bold">200+</p>
              <p className="text-sm text-white/70">Clínicas parceiras</p>
            </div>
            <div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm text-white/70">Satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Area */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white px-8 sm:px-16 xl:px-24">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-brand-blue flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-brand-blue">
              Acesse sua conta
            </h1>
            <p className="mt-2 text-gray-500">
              Gerencie seus benefícios de saúde
            </p>
          </div>

          {/* Clerk Component Placeholder */}
          <div 
            id="clerk-mount"
            className="w-full min-h-[350px] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300"
          >
            <p className="text-gray-500 font-mono text-sm text-center px-4">
              [[CLERK LOGIN COMPONENT HERE]]
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Ao continuar, você concorda com nossos{" "}
              <a href="#" className="text-brand-blue hover:underline">
                Termos de Uso
              </a>{" "}
              e{" "}
              <a href="#" className="text-brand-blue hover:underline">
                Política de Privacidade
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDesign;
