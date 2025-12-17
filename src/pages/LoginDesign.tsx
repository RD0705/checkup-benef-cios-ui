import { Heart, Shield, Users } from "lucide-react";

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
      <div className="w-full lg:w-1/2 flex flex-col bg-white">
        {/* Form Container */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 xl:px-24">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-brand-blue">
                CheckUp Benefícios
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900">
              Bem-vindo de volta
            </h1>
            <p className="mt-2 text-gray-500">
              Acesse sua conta para gerenciar seus benefícios
            </p>
          </div>

          {/* Clerk Mount Point */}
          <div 
            id="clerk-mount"
            className="w-full min-h-[320px] border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50/50"
          >
            <p className="text-gray-400 text-sm">
              Componente de autenticação será montado aqui
            </p>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">ou</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Alternative Actions */}
          <p className="text-center text-gray-600">
            Não tem uma conta?{" "}
            <a href="#" className="text-brand-orange font-semibold hover:underline">
              Cadastre-se agora
            </a>
          </p>
        </div>

        {/* Footer */}
        <footer className="py-6 px-8 sm:px-16 xl:px-24 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Termos de Uso
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Suporte
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginDesign;
