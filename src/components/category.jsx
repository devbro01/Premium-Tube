import { Stack } from '@mui/material'
import { category } from '../constants'

const Category = () => {
    return (
        <Stack direction={'row'} p={1} gap={2} className='category' sx={{ overflowX: 'scroll' }}>
            {category.map((item) => (
                <button key={item.name} className="category-btn">
                    <span style={{ marginBottom: -5 }}>{item.icon}</span>
                    <span>{item.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Category
