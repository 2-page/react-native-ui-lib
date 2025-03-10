import {ToastProps} from '../index';
import {useComponentDriver, ComponentProps} from '../../testkit/new/Component.driver';
import {TextDriver} from '../../components/text/Text.driver.new';
import {ButtonDriver} from '../../components/button/Button.driver.new';

export const ToastDriver = (props: ComponentProps) => {
  const {renderTree, testID} = props;
  const driver = useComponentDriver<ToastProps>(props);
  const actionButtonDriver = ButtonDriver({renderTree, testID: `${testID}-action`});
  const messageDriver = TextDriver({renderTree, testID: `${testID}-message`});

  const getMessage = () => {
    return messageDriver;
  };

  const getAction = () => {
    return actionButtonDriver;
  };

  return {...driver, getMessage, getAction};
};
