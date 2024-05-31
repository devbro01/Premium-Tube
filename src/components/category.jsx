import { Stack } from '@mui/material'
import { category } from '../constants'

const Category = ({ selectCategoryHandler, selectedCategory }) => {
    return (
        <Stack direction={'row'} p={1} gap={2} className="category" sx={{ overflowX: 'scroll' }}>
            {category.map((item) => (
                <button
                    onClick={() => selectCategoryHandler(item.name)}
                    key={item.name}
                    className="category-btn"
                    style={{
                        background: selectedCategory === item.name && '#fff',
                        color: selectedCategory === item.name && '#1f1f1f',
                    }}
                >
                    <span style={{ marginBottom: -5 }}>{item.icon}</span>
                    <span>{item.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Category
