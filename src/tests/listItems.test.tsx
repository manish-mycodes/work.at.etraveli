import { MovieObjectType } from '../types'
import { render, screen } from '@testing-library/react'
import ListItems from '../components/listItems'

describe('ListItems', () => {
    const mockData: MovieObjectType[] = [
        {
            episode_id: 1,
            episode_id_numeric: 'EPISODE 1',
            episode_id_roman: 'EPISODE I',
            release_date: '1977-05-12',
            director: '',
            opening_crawl: '',
            producer: 'Tom Hanks',
            title: 'The Green Mile',
        },
        {
            episode_id: 2,
            episode_id_numeric: 'EPISODE 2',
            episode_id_roman: 'EPISODE II',
            release_date: '200-05-12',
            director: '',
            opening_crawl: '',
            producer: 'Karan Johar',
            title: 'Kabhi Khusi Kabhi Gun',
        },
    ]
    test('renders the list of items', () => {
        // Render the component with the items prop
        render(
            <ListItems
                items={mockData}
                itemSelectHandler={function (episode_id: number): void {
                    throw new Error('Function not implemented.')
                }}
            />
        )

        // Check if all items are rendered and start with "EPISODE"
        const listItems = screen.getAllByRole('listitem')
        listItems.forEach((listItem) => {
            expect(listItem.textContent).toMatch(/^EPISODE/)
        })
    })

    test('renders a message when no items are provided', () => {
        // Render the component with no items
        render(
            <ListItems
                items={[]}
                itemSelectHandler={function (episode_id: number): void {
                    throw new Error('Function not implemented.')
                }}
            />
        )

        // Check if the fallback message is displayed
        expect(screen.getByText('No items available')).toBeInTheDocument()
    })
})
