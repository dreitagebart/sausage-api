import { redirect } from 'next/navigation'

export const GET = () => {
	return redirect('/api/random/1')
}
