import * as Form from '@radix-ui/react-form';
import { Button, TextField } from '@radix-ui/themes';

import useAuth from '@/core/hooks/useAuth/useAuth';

export const AuthPage = () => {
  const { authFunctions } = useAuth();

  const onLogin = () => {
    authFunctions.login('user', '1234');
  };

  return (
    <Form.Root className='max-w-md mx-auto p-6 bg-red rounded-lg'>
      <Form.Field name='username' className='mb-4'>
        <Form.Control asChild>
          <TextField.Root
            className='w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Username'
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name='password' className='mb-4'>
        <Form.Control asChild>
          <TextField.Root
            type='password'
            className='w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Password'
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit onClick={onLogin} asChild>
        <Button
          type='submit'
          className='w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Login
        </Button>
      </Form.Submit>
    </Form.Root>
  );
};
