import { EmptyState, Layout, Page } from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
    <Layout>
      <EmptyState
        heading="Woo Reports!"
        action={{
          content: 'OK, let\'s get started.',
          onAction: () => console.log('clicked'),
        }}
        image={img}
      >
        <p>There are likely no reports here, yet.</p>
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;
