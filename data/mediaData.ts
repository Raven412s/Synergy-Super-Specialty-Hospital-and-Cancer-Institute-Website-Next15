import { useTranslations } from "next-intl"

// Sample media data
export const useGalleryItems = () => {
const t = useTranslations('homepage.Gallery')
const galleryItems = [
    {
        id: 1,
        type: 'image',
        title: t('title.0'),
        date: '15 Jan 2023',
        category: 'Events',
        image: '/media/inauguration.jpg'
    },
    {
        id: 2,
        type: 'video',
        title: 'Cardiology Department Tour',
        date: '22 Mar 2023',
        category: 'Facilities',
        image: '/media/cardiology-tour.jpg'
    },
    {
        id: 3,
        type: 'image',
        title: 'Annual Health Camp',
        date: '5 Apr 2023',
        category: 'Community',
        image: '/media/health-camp.jpg'
    },
    {
        id: 4,
        type: 'image',
        title: 'New Robotic Surgery System',
        date: '18 May 2023',
        category: 'Technology',
        image: '/media/robotic-surgery.jpg'
    },
    {
        id: 5,
        type: 'video',
        title: 'Patient Success Stories',
        date: '30 Jun 2023',
        category: 'Testimonials',
        image: '/media/patient-story.jpg'
    },
    {
        id: 6,
        type: 'image',
        title: 'Research Symposium',
        date: '12 Jul 2023',
        category: 'Education',
        image: '/media/symposium.jpg'
    }
]
}
