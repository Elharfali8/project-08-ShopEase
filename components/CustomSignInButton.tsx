import { SignInButton, SignedOut } from '@clerk/nextjs';
import { Button } from './ui/button';

export default function CustomSignInButton() {
  return (
    <SignedOut>
      <SignInButton mode="modal">
        <Button variant='default' className=' cursor-pointer'>
          Sign In
        </Button>
      </SignInButton>
    </SignedOut>
  );
}
