// Import the necessary modules for testing
import { mount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

// Declare global variable for TypeScript
declare var global: any;

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ link: 'https://bit.ly/123' })
  })
);

describe('Home.vue', () => {
  // Test case to check if the component renders correctly
  it('renders correctly', async () => {
    const wrapper = mount(Home);
    expect(wrapper.exists()).toBe(true);
  });

  // Test case to check if shortenUrl method works correctly
  it('shortenUrl method works correctly', async () => {
    const wrapper = mount(Home);

    // Set data using setData method
    await (wrapper.vm as any).$data.longUrl = 'https://example.com';

    // Call the shortenUrl method
    await (wrapper.vm as any).shortenUrl();

    // Wait for Vue to update the component
    await wrapper.vm.$nextTick();

    // Assert the expected results
    expect((wrapper.vm as any).shortenedUrl).toBe('https://bit.ly/123');
    expect((wrapper.vm as any).error).toBe('');
    expect((wrapper.vm as any).loading).toBe(false);
  });

  // Test case to check if copyToClipboard method works correctly
  it('copyToClipboard method works correctly', () => {
    const wrapper = mount(Home);

    // Mock document.execCommand
    document.execCommand = jest.fn();

    // Call the copyToClipboard method
    (wrapper.vm as any).copyToClipboard('test');

    // Assert that the value is copied to the clipboard
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
