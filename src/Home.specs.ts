import { mount, VueWrapper } from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
import Home from '@/components/Home.vue'; // Assuming Home.vue is located in the components folder

declare var global: any; // Declare global variable for TypeScript

describe('Home', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = mount(Home.default) as VueWrapper<ComponentPublicInstance>;
  });

  test('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.shortner-area').exists()).toBe(true);
  });

  test('shortenUrl method works correctly', async () => {
    // Set data using setData method
    await wrapper.setData({ longUrl: 'https://example.com' });

    // Stub the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ link: 'https://bit.ly/123' })
      })
    );

    // Call the method on the Vue component wrapper
    await (wrapper.vm as any).shortenUrl();

    // Wait for Vue to update the component
    await wrapper.vm.$nextTick();

    // Assert the expected results
    expect((wrapper.vm as any).shortenedUrl).toBe('https://bit.ly/123');
    expect((wrapper.vm as any).error).toBe('');
    expect((wrapper.vm as any).loading).toBe(false);
  });
});
