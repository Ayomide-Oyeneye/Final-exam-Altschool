// Import the necessary modules for testing
import { mount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

declare var global: any;
// Mock the response from the TinyURL API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ short_url: 'https://tinyurl.com/abc123' })
  })
);

// Test case to check if shortenUrl method works correctly with TinyURL
it('shortenUrl method works correctly with TinyURL', async () => {
  const wrapper = mount(Home);

  // Set data using setData method
  await wrapper.setData({ longUrl: 'https://example.com' });

  // Call the shortenUrl method
  await wrapper.vm.shortenUrl();

  // Wait for Vue to update the component
  await wrapper.vm.$nextTick();

  // Assert the expected results
  expect(wrapper.vm.shortenedUrl).toBe('https://tinyurl.com/abc123');
  expect(wrapper.vm.error).toBe('');
  expect(wrapper.vm.loading).toBe(false);
});
