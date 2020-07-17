import { List, Switch } from 'antd';
import React, { Component, Fragment } from 'react';
import { formatMessage } from 'umi';

class NotificationView extends Component {
  getData = () => {
    const Action = (
      <Switch
        checkedChildren={formatMessage({
          id: 'userandsettings.settings.open',
        })}
        unCheckedChildren={formatMessage({
          id: 'userandsettings.settings.close',
        })}
        defaultChecked
      />
    );
    return [
      {
        title: formatMessage(
          {
            id: 'userandsettings.notification.password',
          },
          {},
        ),
        description: formatMessage(
          {
            id: 'userandsettings.notification.password-description',
          },
          {},
        ),
        actions: [Action],
      },
      {
        title: formatMessage(
          {
            id: 'userandsettings.notification.messages',
          },
          {},
        ),
        description: formatMessage(
          {
            id: 'userandsettings.notification.messages-description',
          },
          {},
        ),
        actions: [Action],
      },
      {
        title: formatMessage(
          {
            id: 'userandsettings.notification.todo',
          },
          {},
        ),
        description: formatMessage(
          {
            id: 'userandsettings.notification.todo-description',
          },
          {},
        ),
        actions: [Action],
      },
    ];
  };

  render() {
    const data = this.getData();
    return (
      <Fragment>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default NotificationView;
