'use client';

import Link from 'next/link';
import {Button} from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">HealthLog</h1>
      <p className="text-lg mb-8">
        Welcome to HealthLog, your personal health monitoring system.
      </p>
      <div className="flex space-x-4">
        <Link href="/auth/register">
          <Button variant="outline">Register</Button>
        </Link>
        <Link href="/auth/login">
          <Button>Login</Button>
        </Link>
      </div>
      <div className="mt-8">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-500">
            Login here
          </Link>
          .
        </p>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Dashboards</h2>
        <div className="flex space-x-4">
          <Link href="/patient/dashboard">
            <Button variant="secondary">Patient Dashboard</Button>
          </Link>
          <Link href="/doctor/dashboard">
            <Button variant="secondary">Doctor Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
