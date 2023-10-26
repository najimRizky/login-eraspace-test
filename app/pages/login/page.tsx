import { LoginForm } from '@/app/components/views/LoginForm';
import Image from 'next/image';

export default function Login() {
  return (
    <main className="flex flex-col min-h-screen justify-between items-center p-3">
      <Image
        src="/logo/eraspace.svg"
        data-testid="eraspace-logo"
        width={200}
        height={200}
        alt={'eraspace'}
      />
      <div
        /**
         * Appearance
         * ==========
         * Fill the incomplete className
         */
        className="bg-white rounded-lg max-w-[400px] w-full flex flex-col justify-between items-center gap-5 p-5 shadow"
        data-testid="login-form-component"
      >
        <LoginForm />
        {/* 
          Appearance
          ==========
          Fill the missing code 
        */}
      </div>
      <span className="text-xs" data-testid="copyright">
        COPYRIGHT © 2023 ERASPACE.COM ALL RIGHTS RESERVED.
      </span>
    </main>
  );
}
